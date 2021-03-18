export const createApiToTagList = (tagName: string) =>
    tagName.length === 0?
                    "https://qiita.com/api/v2/tags"
                   :`https://qiita.com/api/v2/tags/${tagName}`;
