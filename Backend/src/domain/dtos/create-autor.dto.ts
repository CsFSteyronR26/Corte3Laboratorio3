export class CreateAutorDTO {

    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly description: string,
        public readonly birthdate: Date,
        public readonly status: boolean
    ) {}

    static create(
        object: { [key: string]: any },
    ): [string | undefined, CreateAutorDTO?]{
        const {
            name,
            email,
            description,
            birthdate,
            status
        } = object;

        if(!name) return ["Missing name"];
        if(!email) return ["Missing email"];
        if(!description) return ["Missing description"];
        if(!birthdate) return ["Missing birthdate"];
        if(!status) return ["Missing status"];

        if(name && name.length > 100)
            return ["name is too large, max length is 100 characters"];

        return [
            undefined,
            new CreateAutorDTO(
                name,
                email,
                description,
                birthdate,
                status
            )
        ];

    }

}