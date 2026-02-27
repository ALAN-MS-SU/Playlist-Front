export function Grid({children}: {children: React.ReactNode}) {
    
    return <div className={"grid justify-items-center grid-cols-3 px-10 py-20"}>
        {children}
    </div>
}