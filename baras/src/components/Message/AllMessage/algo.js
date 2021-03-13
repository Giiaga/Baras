// // import { all } from "../../../../../backendBaras/app";

// // import { all } from "../../../../../backendBaras/app";

// function conversations(sent, recieved) {
//   let commonUsers = [];
//   let uncommonUsers = [];
//   if (sent.length && recieved.length) {
//     if (sent.length > recieved.length) {
//       for (let i = -sent.length + 1; i < sent.length; i++) {
//         for (let j = -recieved.length + 1; j < recieved.length; j++) {
//           if (
//             sent[0].recieverId == recieved[0].senderId &&
//             commonUsers.indexOf(sent[0].recieverId) < 0
//           ) {
//             commonUsers.push(sent[0].recieverId);
//             sent.shift();
//           } else if (
//             sent[0].recieverId != recieved[0].senderId &&
//             commonUsers.indexOf(sent[0].recieverId) < 0
//           ) {
//             uncommonUsers.push(sent[0].recieverId);
//             sent.shift();
//             recieved.shift();
//           }
//         }
//       }
//       let allMessages = [...uncommonUsers, ...commonUsers];
//       let holdThem = [];
//       for (let j = 0; j < allMessages.length; j++) {
//         for (let i = 0; i < allMessages.length; i++) {
//           if (allMessages[j].createdAt > allMessages[i].createdAt) {
//             holdThem = allMessages[j];
//             allMessages[j] = allMessages[i];
//             allMessages[i] = holdThem;
//           }
//         }
//       }

//       let allDivs = [];
//       allMessages.forEach((each) => {
//         if (each.senderId === userId) {
//           allDivs.push(
//             <div
//               key={each.createdAt}
//               className="listOfMessagesDiv"
//               onClick={() => {
//                 props.state.setMessageOpen(true);
//                 props.state.setUserClicked(each.recieverId);
//               }}
//             >
//               <img src={each.reciever.photo} alt={each.reciever.username} />
//               <div className="messageDetail">
//                 <p style={{ fontSize: "14px" }}>{each.reciever.username}</p>
//                 <p
//                   style={{
//                     fontSize: "13px",
//                     color: "rgba(10,10,10,0.3)",
//                     fontWeight: "light",
//                     paddingTop: "2px",
//                   }}
//                 >
//                   {each.message.slice(0, 20)}
//                 </p>
//               </div>
//             </div>
//           );
//         } else {
//           allDivs.push(
//             <div
//               key={each.createdAt}
//               className="listOfMessagesDiv"
//               onClick={() => {
//                 props.state.setMessageOpen(true);
//                 props.state.setUserClicked(each.senderId);
//               }}
//             >
//               <img src={each.sender.photo} alt={each.sender.photo} />
//               <div className="messageDetail">
//                 <p style={{ fontSize: "14px" }}>{each.sender.username}</p>
//                 <p
//                   style={{
//                     fontSize: "13px",
//                     color: "rgba(10,10,10,0.3)",
//                     fontWeight: "light",
//                     paddingTop: "2px",
//                   }}
//                 >
//                   {each.message.slice(0, 20)}
//                 </p>
//               </div>
//             </div>
//           );
//         }
//       });
//       return allDivs;
//     }
//   }
// }

// export default conversations;
