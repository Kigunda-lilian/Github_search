export class User {
    constructor (
        public login:string,
        public name:string,
        public bio:string,
        public html_url:string,
        public created_at:Date ,
        public public_repos:number,
        public followers:number,
        public following:number,
        
    ) {}
}
