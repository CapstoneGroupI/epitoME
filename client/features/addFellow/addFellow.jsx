import React from 'react'
import { useDispatch } from 'react-redux'
import { getFellow, createFellow } from '../../slices/fellowsSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectFellows } from '../../slices/fellowsSlice'


const AddFellow = () => {

    const userId = useSelector((state) => state.auth.me.id)

    const fellows = useSelector(selectFellows)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFellow())
        console.log(userId)
        console.log('------------------------------------------')
    }, [userId])

    let arr = []

    arr = fellows.map(fellow => { return fellow });
        console.log('these are the followers', fellows)

    const handleAddFellow = (e) => {
        e.preventDefault()
        dispatch(createFellow({userId, followerId}))
        // follower id is not defined!! (followerId = event.target.userId??)
        console.log('added')
    }


  return (
    <div>
        <button onClick={handleAddFellow}>(+)</button>
    </div>
  )
}

export default AddFellow