import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import React, {ForwardedRef, forwardRef} from "react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {GenderFilterOptions} from "./GenderFilterOptions";
import {AgeFilterOptions} from "./AgeFilterOptions";
import {NutrientFilterOptions} from "./NutrientFilterOptions";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  nutrientRef: React.MutableRefObject<HTMLDivElement | null>;
  //focusRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const FilterModal = forwardRef((props: FilterModalProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
      <Modal
          onClose={props.onClose}
          size={"full"}
          isOpen={props.isOpen}
          scrollBehavior={"inside"}
          returnFocusOnClose={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems="center">
              <IconButton
                  bg={"white"}
                  size={"lg"}
                  fontSize="24px"
                  aria-label="Table Filters"
                  icon={<ArrowBackIcon />}
                  onClick={props.onClose}
              />
              <Flex width="100%" justify="center">
                <Text>Filters</Text>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Box>
              <GenderFilterOptions />
              <Divider my={4} />
              <AgeFilterOptions />
              <Divider my={4} />
              <Box ref={ref}>
                <NutrientFilterOptions />
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button bg="black" color="white" variant="solid" onClick={props.onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
})


/*
export const FilterModal1 = ({
  isOpen,
  onClose,
  nutrientRef,
  focusRef
}: FilterModalProps) => {
  useEffect(() => {
    if(!focusRef) return
    console.log(`foscusRef = ${focusRef.current}`)
    focusRef.current?.scrollIntoView({behavior: 'smooth'})
  }, )
  return (
    <Modal
      onClose={onClose}
      size={"full"}
      isOpen={isOpen}
      scrollBehavior={"inside"}
      returnFocusOnClose={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex alignItems="center">
            <IconButton
              bg={"white"}
              size={"lg"}
              fontSize="24px"
              aria-label="Table Filters"
              icon={<ArrowBackIcon />}
              onClick={onClose}
            />
            <Flex width="100%" justify="center">
              <Text>Filters</Text>
            </Flex>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Box>
            <GenderFilterOptions />
            <Divider my={4} />
            <AgeFilterOptions />
            <Divider my={4} />
            <Box ref={nutrientRef}>
              <NutrientFilterOptions />
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button bg="black" color="white" variant="solid" onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
*/
