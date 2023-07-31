import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({modalOpen,setModalOpen}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpen}
        onClose={()=>setModalOpen(false)}
        title="EDIT YOUR BIO"
        size='55%'
        overlayprops={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form action="" className="infoForm">
            <h3>Yor Info</h3>
            <div>
                <input type="text"
                name='FirstName'
                placeholder='First Name'
                 className='infoInput' />

                    <input type="text"
                name='LastName'
                placeholder='Last Name'
                 className='infoInput' />
            </div>
            <div>
            <input type="text"
                name='workAT'
                placeholder='Works at '
                 className='infoInput' />
            </div>
            <div>
            <input type="text"
                name='livesIN'
                placeholder='Lives in'
                 className='infoInput' />

                    <input type="text"
                name='country'
                placeholder='Country'
                 className='infoInput' />
            </div>
            <div>
            <input type="text"
                name='relationshipStatus'
                placeholder='Relationship status'
                 className='infoInput' />
            </div>
            <div>
                Profile Image
                <input type="file" name="profileImage" id="" />
                Cover Image
                <input type="file" name="coverImage" id="" />
            </div>
            <button style={{height:'2rem'}} className='button infoButton'> Updates</button>
        </form>
      </Modal>

     
    </>
  );
}


export default ProfileModel