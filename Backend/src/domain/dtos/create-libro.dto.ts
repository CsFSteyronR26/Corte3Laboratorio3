export class CreateLibroDTO {

    private constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly editorial: string,       
        public readonly status: boolean
    ) {}

    static create(
        object: { [key: string]: any },
    ): [string | undefined, CreateLibroDTO?]{
        const {
            name,
            description,
            editorial,
            status
        } = object;

        if(!name) return ["Missing name"];
        if(!description) return ["Missing description"];
        if(!editorial) return ["Missing editorial"];
        if(!status) return ["Missing status"];

        if(name && name.length > 100)
            return ["name is too large, max length is 100 characters"];

        return [
            undefined,
            new CreateLibroDTO(
                name,
                description,
                editorial,
                status
            )
        ];

    }

}