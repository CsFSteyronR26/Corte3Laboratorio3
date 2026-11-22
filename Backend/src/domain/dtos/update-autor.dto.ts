export class UpdateAutorDTO {

    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly description: string,
        public readonly birthdate: Date,
        public readonly status: boolean
    ) {}

    static create(
        object: { [key: string]: any },
    ): [string | undefined, UpdateAutorDTO?]{
        const {
            name,
            description,
            email,
            birthdate,
            status
        } = object;

        if(!name) return ["Missing name"];
        if(!description) return ["Missing description"];
        if(!email) return ["Missing email"];
        if(!birthdate) return ["Missing birthdate"];
        if(!status) return ["Missing status"];

        if(name && name.length > 100)
            return ["name is too large, max length is 100 characters"];

        return [
            undefined,
            new UpdateAutorDTO(
                name,
                description,
                email,
                birthdate,
                status
            )
        ];

    }

}
      