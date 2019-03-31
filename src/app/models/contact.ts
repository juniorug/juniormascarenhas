export class Contact {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public subject: string,
        public phone: string,
        public message: string,
        public address?: string
    ) { }
}
