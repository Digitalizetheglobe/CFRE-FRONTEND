// import React, { useState } from 'react';

// const WhatsAppChat = () => {
//     const [isChatboxVisible, setChatboxVisible] = useState(false);
//     const [message, setMessage] = useState('');

//     const toggleChatbox = () => {
//         setChatboxVisible(!isChatboxVisible);
//     };

//     const sendMessage = () => {
//         if (message.trim() !== "") {
//             const whatsappUrl = https://wa.me/9975107935?text=${encodeURIComponent(message)};
//                 window.open(whatsappUrl, '_blank');
//             setMessage(''); // Clear the input field after sending the message
//         }
//     };

//     return (
//         <section>
//             {/* WhatsApp Button */}
//             <div
//                 id="whatsapp-button"
//                 onClick={toggleChatbox}
//                 style={{
//                     position: 'fixed',
//                     zIndex: 100,
//                     bottom: '20px',
//                     right: '20px',
//                     backgroundColor: '#1fb355',
//                     color: 'white',
//                     borderRadius: '50px',
//                     padding: '10px 20px',
//                     fontSize: '18px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     textDecoration: 'none',
//                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                     cursor: 'pointer',
//                 }}
//             >
//                 <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
//                     alt="WhatsApp"
//                     style={{
//                         width: '24px',
//                         height: '24px',
//                         marginRight: '10px',
//                     }}
//                 />
//                 Chat with us
//             </div>

//             {/* Chatbox */}
//             {isChatboxVisible && (
//                 <div
//                     id="chatbox"
//                     style={{
//                         position: 'fixed',
//                         zIndex: 100,
//                         bottom: '80px',
//                         right: '20px',
//                         width: '350px',
//                         height: '450px',
//                         border: '1px solid #ddd',
//                         borderRadius: '10px',
//                         backgroundColor: '#fff',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                     }}
//                 >
//                     {/* Chatbox Header */}
//                     <div
//                         style={{
//                             backgroundColor: '#075E54',
//                             color: 'white',
//                             padding: '15px',
//                             borderTopLeftRadius: '10px',
//                             borderTopRightRadius: '10px',
//                             fontSize: '16px',
//                             textAlign: 'center',
//                         }}
//                     >
//                         Affluent Interior
//                         <div
//                             style={{
//                                 fontSize: '12px',
//                                 color: '#C2C2C2',
//                                 marginTop: '5px',
//                             }}
//                         >
//                             Replies within few hours
//                         </div>
//                     </div>

//                     {/* Chatbox Body */}
//                     <div
//                         style={{
//                             flex: 1,
//                             padding: '10px',
//                             overflowY: 'auto',
//                             backgroundColor: '#ECE5DD',
//                         }}
//                     >
//                         <p
//                             style={{
//                                 backgroundColor: 'white',
//                                 padding: '10px',
//                                 borderRadius: '8px',
//                                 width: 'fit-content',
//                                 margin: '10px 0',
//                             }}
//                         >
//                             Hey! 👋 How can we help you?
//                         </p>
//                         <div
//                             id="user-message"
//                             style={{
//                                 backgroundColor: '#DCF8C6',
//                                 padding: '10px',
//                                 borderRadius: '8px',
//                                 width: 'fit-content',
//                                 margin: '10px 0',
//                             }}
//                         >
//                             {message}
//                         </div>
//                     </div>

//                     {/* Chatbox Footer */}
//                     <div
//                         style={{
//                             padding: '10px',
//                             borderTop: '1px solid #ddd',
//                         }}
//                     >
//                         <input
//                             id="chat-input"
//                             type="text"
//                             placeholder="Type a message..."
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             style={{
//                                 width: '100%',
//                                 padding: '10px',
//                                 border: '1px solid #ddd',
//                                 borderRadius: '5px',
//                             }}
//                         />
//                         <button
//                             id="send-button"
//                             onClick={sendMessage}
//                             style={{
//                                 marginTop: '10px',
//                                 width: '100%',
//                                 padding: '10px',
//                                 backgroundColor: '#25D366',
//                                 color: 'white',
//                                 border: 'none',
//                                 borderRadius: '5px',
//                                 cursor: 'pointer',
//                             }}
//                         >
//                             Start chat
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default WhatsAppChat;