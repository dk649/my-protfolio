export default {

    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
        name: "title",
        type: "string",

        },

        {

            name: "date",
            type: "datetime",

        },

        {

            name: "place",
            type: "string",
        },

        {

            name: "description",
            type: "text",

        },

        {
            name: "projectType",
            title: "project Type",
            type: "string",
            options: {

                list: [

                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                ],
                
            },
        },

        {
            name: "Link",
            type: "url",
        },

        {
            name: "tags",
            type: "array",
            of: [

                {
                    type: "string"
                },
            ],
            options: {
                layout: "tags",

            },
        },

    ],
};