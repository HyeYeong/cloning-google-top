import { BadgeIcon } from "@/src/components/atoms/BadgeIcon"
import { Wrap } from '@chakra-ui/layout';

export const BadgeIcons = () => {

  return (
    <Wrap display='flex'>
      <BadgeIcon/>
      <BadgeIcon/>
      <BadgeIcon/>
      <BadgeIcon/>
    </Wrap>
  )
};
