namespace :photos do
  desc 'Add missing IDs from recent photos'
  task fix_ids: :environment do
    client = Instagram.client(access_token:
      Rails.application.credentials.instagram[:token])

    ids = client.user_recent_media.map(&:id)
    photos = Photo.descending.first(ids.length)

    ids.each_with_index do |id, i|
      photos[i].update(instagram_id: id)
    end
  end
end
