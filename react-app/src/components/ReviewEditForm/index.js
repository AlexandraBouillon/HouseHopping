import React ,{useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {fetchReviewById, updateReview} from "../../store/review"
import "./reviewEditForm.css"


export default function ReviewEditForm() {
    const {review_id} = useParams();
    const dispatch = useDispatch();
    const review = useSelector(state => state.review.selected_review)
    const [content,setContent] = useState('');
    const [count,setCount] = useState();
    const history = useHistory();

    const handleReviewEditFormSubmit = (event) => {
        event.preventDefault();
        dispatch(updateReview(review_id,content,count))
        history.push(`/spots/${review.spot_id}`)
    }

    useEffect(() => {
       setContent(review.content)
    }, [review])

    useEffect(() => {
       dispatch(fetchReviewById(review_id));
    //    if (review && review.content) {
        //    setContent(review.content);
    //    }
    }, [dispatch])


    return (
        <div>
            <h1>Review Edit Form</h1>
            {review &&
            <form onSubmit={handleReviewEditFormSubmit}>
                <label> Content: </label>
                <textarea value={content}  onChange={(e) => setContent(e.target.value)}></textarea>
                <div>
                    <label htmlFor="count">Review</label>
                    <select name="count" id="count" onChange={(e)=> setCount(parseInt(e.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
            }

        </div>
    )
}
