export class Product {
    constructor(
        public id: number,
        public name: string,
        public year: number,
        public price: number,
        public type: string,
        public image: string,
        public description: string,
        public titleSlug: string,
        public route: string,
        public url: string
    ) { }
}
