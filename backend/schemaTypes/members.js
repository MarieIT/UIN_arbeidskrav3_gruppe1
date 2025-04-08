// Setter opp database struktur for medlemmer. 
const member = {
    name: 'member',
    type: 'document',
    title: 'Gruppemedlem',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Navn',
        },
        {
            name: 'email',
            type: 'string',
            title: 'E-post',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Bilde',
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Biografi',
        },
        {
            name: 'interests',
            type: 'array',
            title: 'Interesser',
            of: [{ type: 'string' }],
        },
        {
            name: 'log',
            type: 'array',
            title: 'Loggføring',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'date', type: 'date', title: 'Dato' },
                        { name: 'entry', type: 'string', title: 'Beskrivelse' },
                    ],
                },
            ],
        },
    ],
}

export default member