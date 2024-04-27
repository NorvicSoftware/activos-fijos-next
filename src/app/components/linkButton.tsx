export default function LinkButton({name = '', route= ''}){
    return (
        <a href={route}>{name}</a>
    )
}