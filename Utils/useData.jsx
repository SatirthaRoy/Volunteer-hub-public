import { useContext } from 'react'
import { contextData } from '../src/Provider'


const useData = () => {
  const obj = useContext(contextData)

  return obj;
}

export default useData