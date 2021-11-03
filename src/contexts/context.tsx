import { createContext, useContext, FC, useState, SetStateAction, Dispatch, useEffect } from 'react';

interface AppContextProps {
    destination: string,
    crewMember: string,
    technology: string,
    spaceData: SpaceData,
    setDestination: Dispatch<SetStateAction<string>>,
    setCrewMember: Dispatch<SetStateAction<string>>,
    setTechnology: Dispatch<SetStateAction<string>>,
    setSpaceData: Dispatch<SetStateAction<SpaceData>>,
}

const AppContext = createContext<AppContextProps>({
    destination: '',
    crewMember: '',
    technology: '',
    spaceData: { destinations: [], crew: [], technology: [] },
    setDestination: () => '',
    setCrewMember: () => '',
    setTechnology: () => '',
    setSpaceData: () => ({ destinations: [], crew: [], technology: [] })
});

export const AppWrapper: FC = ({ children }) => {
    const [destination, setDestination] = useState('Moon')
    const [crewMember, setCrewMember] = useState('Douglas Hurley')
    const [technology, setTechnology] = useState('Launch vehicle')
    const [spaceData, setSpaceData] = useState<SpaceData>({ destinations: [], crew: [], technology: [] })

    const spaceValue = { destination, setDestination, crewMember, setCrewMember, technology, setTechnology, spaceData, setSpaceData }

    useEffect(() => {
        const getSpaceData = async () => {
            const res = await fetch('/data.json').then(response => response)
            const data = await res.json()
            setSpaceData(data)
        }
        getSpaceData()
    }, [])

    return (
        <AppContext.Provider value={spaceValue} >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}