class FacebookWidget < Widget
  attribute :type, :enum, values: ['page','post','video'], default: 'page'
  attribute :url, :string
  attribute :allowfullscreen, :enum, values: ['Yes', 'No'], default: 'Yes'
  attribute :width, :string, default: '500'
  attribute :height, :string, default: '700'
  attribute :hide_cover, :enum, values: ['Yes', 'No'], default: 'No'
  attribute :show_facepile, :enum, values: ['Yes', 'No'], default: 'Yes'
  attribute :show_posts, :enum, values: ['Yes', 'No'], default: 'Yes'
  attribute :hide_cta, :enum, values: ['Yes', 'No'], default: 'No'

  def facebook_data
    {
      href: url,
      width: width,
      height: height,
      hide_cover: hide_cover == "Yes" ? 'true' : 'false',
      show_facepile: show_facepile == "Yes" ? 'true' : 'false',
      show_posts: show_posts == "Yes" ? 'true' : 'false',
      hide_cta: hide_cta == "Yes" ? 'true' : 'false'
    }
  end
end
