export default function LinkButton({name = '', route= ''}){
    return (
        <a href={route} className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
  {name}
</a>

    )
}