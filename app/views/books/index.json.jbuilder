json.array!(@books) do |book|
  json.extract! book, :id, :name, :author_id, :branch_id
  json.url book_url(book, format: :json)
end
