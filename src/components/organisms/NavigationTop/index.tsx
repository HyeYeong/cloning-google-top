import { BadgeIcon } from "@/src/components/atoms/BadgeIcon"
import { Wrap } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react'

export const NavigationTop = () => {

  return (
    <Wrap display='flex'>
      <nav>
        <Link>Gmail</Link>
        <Link>Images</Link>
        <p>popover menu</p>
        <p>popover profile Icon</p>
        {/* https://chakra-ui.com/docs/components/popover */}
      </nav>
    </Wrap>
  )
};
