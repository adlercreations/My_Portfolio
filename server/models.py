class Project:
    def __init__(self, id, title, description, tools, video_link, image_url, expanded_description):
        self.id = id
        self.title = title
        self.description = description
        self.tools = tools
        self.video_link = video_link
        self.image_url = image_url
        self.expanded_description = expanded_description

    @staticmethod
    def from_dict(data):
        return Project(
            id=data['id'],
            title=data['title'],
            description=data['description'],
            tools=data['tools'],
            video_link=data['video_link'],
            image_url=data['image_url'],
            expanded_description=data['expanded_description']
        )