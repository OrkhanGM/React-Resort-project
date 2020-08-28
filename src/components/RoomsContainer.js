import React from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomList from "./RoomList";
import {withRoomConsumer} from "../context";
import Loading from "./loading"


function RoomsContainer({context}){
    const {loading,sortedRooms, rooms} =context;
     if(loading){
                        return <Loading/>


                    }
                    return (
                      <>
                        <RoomsFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms} />
                      </>
                    )


}
export default withRoomConsumer(RoomsContainer)














// import React from 'react'
// import RoomsFilter from "./RoomsFilter"
// import RoomList from "./RoomList";
// import {RoomConsumer} from "../context";
// import Loading from "./loading"


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>

//             {
//                 value =>{
//                     const {loading ,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading/>


//                     }
//                     return (
//                       <div>
//                         fghjkl
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms} />
//                       </div>
//                     );

//                 }
//             }
//         </RoomConsumer>


//     )
// }
