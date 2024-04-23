export default function ListAssets (){

    const title:string = "LISTADO DE ACTIVOS FIJOS";

    function sum (a:number, b:number){
        return a + b;
    }

    const sum2 = (a: number, b:number) => {
        return a + b;
    }

    const c = sum(6, 7);
    const d = sum2(8, 3);
    return (
        <h2>{ title } { c } { d }</h2>
    )
}