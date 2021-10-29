import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import React, {ForwardedRef, MutableRefObject, RefObject} from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { GenderFilterOptions } from "./GenderFilterOptions";
import { AgeFilterOptions } from "./AgeFilterOptions";
import { NutrientFilterOptions } from "./NutrientFilterOptions";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  nutrientRef: React.MutableRefObject<HTMLDivElement | undefined>;
  focusRef: React.MutableRefObject<HTMLDivElement | undefined>;
}
export const FilterModal = ({
  isOpen,
  onClose,
  nutrientRef,
  focusRef
}: FilterModalProps) => {
  return (
    <Modal
      onClose={onClose}
      size={"full"}
      isOpen={isOpen}
      scrollBehavior={"inside"}
      returnFocusOnClose={true}
      initialFocusRef={focusRef}
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
            <NutrientFilterOptions ref={nutrientRef} />
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
