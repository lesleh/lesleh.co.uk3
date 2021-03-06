# frozen_string_literal: true

task photo_import: :environment do
  data = JSON.parse(IO.read('/home/ubuntu/photos/images.json'))

  data.each do |dat|
    bn = File.basename(dat['image_url'])
    description = dat['text']
    created_at = Time.at(dat['timestamp'].to_i)
    puts "/home/ubuntu/photos/#{bn}"
    photo = Photo.create!(created_at: created_at, description: description)
    photo.image.attach(io: File.open("/home/ubuntu/photos/#{bn}"),
                       filename: bn)
  end
end
