export class User {
    constructor(
        public id: number = null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public address: string = "",
        public apt: string = "",
        public city: string = "",
        public state: string = "",
        public lucky: string = null,
        public result: string = null,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
      ){}
}
