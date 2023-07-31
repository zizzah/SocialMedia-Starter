import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';


const ShareModal = ({modalOpen,setModalOpen}) => {

  return (
    <>
    <Modal
      opened={modalOpen}
      onClose={()=>setModalOpen(false)}
      title=""
      size='55%'
      overlayprops={{
        opacity: 0.55,
        blur: 3,
      }}
    >
      <PostShare/>
    </Modal>

   
  </>
  )
}

export default ShareModal