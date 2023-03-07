import {
  Flex,
  Divider,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  AudibleIcon,
  IMDBIcon,
  InstagramIcon,
  SpotlightIcon,
  TwitterIcon,
  ShowcastIcon,
} from "../assets/Icons";

interface SocialsProps {
  iconsRight?: boolean;
  horizontalOnly?: boolean;
}

export const Socials: React.FC<SocialsProps> = ({
  iconsRight = false,
  horizontalOnly = false,
}) => {
  const orientation = useBreakpointValue<any>({
    base: "horizontal",
    md: horizontalOnly ? "horizontal" : "vertical",
  });
  const tooltipPosition = useBreakpointValue<any>({
    base: "bottom",
    md: "right",
  });

  const color = useColorModeValue("blackAlpha.500", "white");
  const socialIcons = [
    {
      icon: (
        <AudibleIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={4}
          key="Amazon Audible"
        />
      ),
      href: "https://www.amazon.co.uk/s?k=Olivia+Beardsley&i=audible&ref=adbl_dp_pd_narr",
    },
    {
      icon: (
        <ShowcastIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={4}
          key="Showcast"
        />
      ),
      href: "https://showcast.com.au/",
    },
    {
      icon: (
        <InstagramIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={4}
          key="Instagram"
        />
      ),
      href: "https://www.instagram.com/missollie/",
    },
    {
      icon: (
        <SpotlightIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={4}
          key="Spotlight Casting"
        />
      ),
      href: "http://www.spotlight.com/interactive/cv/9177-8972-2432",
    },
    {
      icon: (
        <IMDBIcon
          color={useColorModeValue("black", "white")}
          h={6}
          w={6}
          m={4}
          key="IMDB"
        />
      ),
      href: "https://www.imdb.com/name/nm6371549",
    },
  ];
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap={{ base: 0, sm: 4 }}
      flexDirection={{ base: "row", md: horizontalOnly ? "row" : "column" }}
    >
      <Divider color={color} borderWidth="1px" orientation={orientation} />
      {socialIcons.map(({ icon, href }) => (
        <Tooltip label={icon.key} placement={tooltipPosition} key={icon.key}>
          <IconButton
            as={NextLink}
            variant="ghost"
            aria-label="social"
            rounded="full"
            icon={icon}
            href={href}
          />
        </Tooltip>
      ))}
      {!iconsRight && (
        <Divider color={color} borderWidth="1px" orientation={orientation} />
      )}
    </Flex>
  );
};
