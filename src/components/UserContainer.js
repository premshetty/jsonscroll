import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Fetchuser } from '../Users/UserAction'
import classes from './UserContainer.module.css'

const UserContainer = ({ userData, Fetchuser }) => {
    useEffect(() => {
        Fetchuser()
    }, [])
    return Fetchuser.loading ? (
        <h2> loading...</h2>)
        : Fetchuser.error ? (<h2>error {userData.error} </h2>)
            : (
                <div >
                    
                    <h2 className={classes.h2}> JSON PLACEHOLDER API - User List </h2>
                    <h2 className={classes.h2} > &#9194; scroll &#9193; </h2>
                    <div className={classes.parentdiv}>
                        {
                            userData && userData.user && userData.user.map(user => {

                                return <div key={user.id} className={classes.card, classes.glowonhover} >

                                    {console.log('user.id' + user.id + user.name)}
                                    <p> ID: {user.id} </p>
                                    <p> NAME:{user.name} &#127948;</p>
                                    <p> USER NAME : {user.username} </p>
                                    <p>email : {user.email} </p>
                                    

                                </div>

                            }

                            )
                        }
                    </div>

                </div>
            )

}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Fetchuser: () => dispatch(Fetchuser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);