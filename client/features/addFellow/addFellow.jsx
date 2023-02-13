<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> a75c9bdb820e4a0fe52df61563ee36d660809a51
import React from 'react'
import { useDispatch } from 'react-redux'
import { getFellow, createFellow } from '../../slices/fellowsSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectFellows } from '../../slices/fellowsSlice'
// import { useParams } from 'react-router-dom'


const AddFellow = ({followerId}) => {

    const userId = useSelector((state) => state.auth.me.id)

    console.log('testing', followerId)

    const fellows = useSelector(selectFellows)
    console.log('helloooooooooo', fellows)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFellow())
        // console.log('TESTING123', userId, firstName, lastName)
        // console.log('------------------------------------------')
    }, [userId])

    let arr = []

    // arr = fellows.map(fellow => { return fellow });
        console.log('these are the arr', arr)

    const handleAddFellow = (e) => {
        e.preventDefault()
        dispatch(createFellow({userId, followerId}))
        // follower id is not defined!! (followerId = event.target.userId??)
        console.log('added')
    }


  return (
    <div>
        <button onClick={handleAddFellow}>(Add Fellow)</button>
    </div>
  )
}

export default AddFellow