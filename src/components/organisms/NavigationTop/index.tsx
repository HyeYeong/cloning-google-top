import { userState } from '@/src/recoil/user/atoms';
import { useRecoilState } from 'recoil';
import { Wrap } from '@chakra-ui/layout';
import { Link, Avatar, MenuGroup, MenuList, MenuDivider, MenuItem, MenuButton, Menu, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const NavigationTop = () => {
  const [userName] = useRecoilState(userState)

  return (
      <nav>
        <Wrap display='flex' align={'center'} justifyContent={"flex-end"}>
          <Link display='inline-block' padding={'10px 4px'}>Gmail</Link>
          <Link display='inline-block' padding={'10px 4px'}>Images</Link>
          {/* NOTE: global menu */}
          <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon bgColor={'transparent'} boxSize='24px'/>}
          />
            <MenuList>
              <MenuGroup>
                <MenuItem>Account</MenuItem>
                <MenuItem>Map</MenuItem>
                <MenuItem>Youtube</MenuItem>
                <MenuItem>Search</MenuItem>
                <MenuItem>Gmail</MenuItem>
                <MenuItem>Drive</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
                <MenuItem>Books</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          {/* NOTE: profile menu */}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='profile menu'
              icon={<Avatar boxSize='32px' name={userName} src='https://bit.ly/broken-link' />}
            />
            <MenuList>
              <MenuGroup title={`${userName}@gmail.com`}>
                <MenuItem>profile Icon</MenuItem>
                <MenuItem>manage your Google Account</MenuItem>
                <MenuItem>Hi, {userName} !</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem>Add Account</MenuItem>
                <MenuItem>Sign out</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Help'>
                <MenuItem>Privacy Policy</MenuItem>
                <MenuItem>Terms of Service</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Wrap>
      </nav>
  )
};
