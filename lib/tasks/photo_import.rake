task :photo_import => :environment do
  data = JSON.parse(IO.read('/Users/leslie.hoare/Desktop/photos/images.json'))

  data.each do |dat|
    bn = File.basename(dat['image_url'])
    created_at = Time.at(dat['timestamp'].to_i)
    puts "/Users/leslie.hoare/Desktop/photos/#{bn}"
    photo = Photo.create!(created_at: created_at)
    photo.image.attach(io: File.open("/Users/leslie.hoare/Desktop/photos/#{bn}"),
                     filename: bn)
  end
end
