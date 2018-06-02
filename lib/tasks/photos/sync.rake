namespace :photos do
  desc 'Sync photos with Instagram'
  task sync: :environment do
    require 'open-uri'

    client = Instagram.client(access_token:
      Rails.application.credentials.instagram[:token])

    new_photos = client.user_recent_media.take_while do |x|
      Photo.find_by_instagram_id(x.id).nil?
    end

    new_photos.each do |new_photo|
      instagram_id = new_photo.id
      published_at = DateTime.strptime(new_photo.created_time,'%s')
      description = new_photo.caption&.text
      image_url = new_photo.images.standard_resolution.url
      image_filename = File.basename(image_url)

      puts "Adding #{instagram_id}"

      photo = Photo.create(
        instagram_id: instagram_id,
        description: description,
        published_at: published_at
      )
      photo.image.attach(io: open(image_url), filename: image_filename)
    end
  end
end
