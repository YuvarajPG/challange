class Product {
    private _productName: string | undefined;
    get productName(): string | undefined {
        return this._productName;
    }
    set productName(newName: string) {
        this._productName = newName;
    }
}
let product = new Product();
product.productName = "Fridge";
if (product.productName) {
    console.log(product.productName);
}
