import React from 'react'
import { useDispatch } from 'react-redux'
import { getFellow, createFellow } from '../../slices/fellowsSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectFellows } from '../../slices/fellowsSlice'
// import { useParams } from 'react-router-dom'


const AddFellow = ({followerId}) => {

    const userId = useSelector((state) => state.auth.me.id)

    // const { followerId } = useParams()
    console.log('testing', followerId)

    const fellows = useSelector(selectFellows)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFellow())
        // console.log(userId)
        // console.log('------------------------------------------')
    }, [userId])

    let arr = []

    // arr = fellows.map(fellow => { return fellow });
        console.log('these are the followers', fellows[1])

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