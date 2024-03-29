import { GridItem, Grid, Image } from "@chakra-ui/react";

interface ImageGridProps {}

export const ImageGrid: React.FC<ImageGridProps> = ({}) => {
  const images = [
    { image: "11", row: 3, col: 6, gray: true },
    { image: "2", row: 3, col: 6, gray: false },
    { image: "9", row: 4, col: 8, gray: false },
    { image: "4", row: 2, col: 4, gray: true },
    { image: "5", row: 2, col: 4, gray: true },
    { image: "6", row: 3, col: 6, gray: true },
    { image: "7", row: 3, col: 6, gray: false },
    { image: "8", row: 4, col: 8, gray: false },
    { image: "3", row: 2, col: 4, gray: true },
    { image: "1", row: 2, col: 4, gray: true },
  ];
  return (
    <Grid
      h={{
        base: "1080px",
        sm: "1140px",
        md: "1500px",
        lg: "2460px",
        xl: "3340px",
      }}
      templateRows="repeat(7, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={3}
    >
      {images.map(({ image, row, col, gray }) => (
        <GridItem rowSpan={row} colSpan={col} overflow="hidden" key={image}>
          {/* <NextImage
            src={`/headshots/${image}.jpg`}
            style={{
              objectFit: "contain",
            }}
            alt="Olivia"
            width={680}
            height={850}
            priority
          /> */}
          <Image
            src={`/avif/${image}.avif`}
            style={{
              objectFit: "contain",
            }}
            alt="Olivia"
            objectFit="contain"
            filter={gray ? "grayscale(100%)" : "grayscale(0%)"}
            _hover={{
              filter: gray ? "grayscale(0%)" : "grayscale(100%)",
            }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
