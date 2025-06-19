import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Image,
  Spacer,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      h="65px"
      px={6}
      bg="white.100"
      align="center"
      boxShadow="sm"
      borderBottom="1px solid"
      borderColor="grey.200"
    >
      {/* Logo */}
      <Link to="/">
        <Image
          src="/logo.png"
          alt="AIHire Logo"
          h={{ base: '45px', sm: '35px' }}
        />
      </Link>

      <Spacer />

      <HStack spacing={4} align="center">
        {/* Platform Tools */}
        <Link to="/interviews">
          <Button variant="ghost" size="sm" color="grey.600" _hover={{ color: 'teal.500' }}>
            Interviews
          </Button>
        </Link>
        <Link to="/assessments">
          <Button variant="ghost" size="sm" color="grey.600" _hover={{ color: 'teal.500' }}>
            Assessments
          </Button>
        </Link>
        <Link to="/analytics">
          <Button variant="ghost" size="sm" color="grey.600" _hover={{ color: 'teal.500' }}>
            Analytics
          </Button>
        </Link>

        {/* Primary CTA */}
        <Link to="/candidates">
          <Button
            bg="teal.400"
            color="white"
            _hover={{ bg: 'teal.500' }}
            size="sm"
            fontWeight="bold"
            px={4}
          >
            Find Candidates
          </Button>
        </Link>

        {/* Login Dropdown */}
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            size="sm"
            borderColor="grey.300"
            color="grey.600"
            _hover={{ borderColor: 'teal.400', color: 'teal.500' }}
          >
            Login
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/employer-login">Employer Login</MenuItem>
            <MenuItem as={Link} to="/candidate-login">Candidate Login</MenuItem>
          </MenuList>
        </Menu>

        {/* Menu Icon Dropdown */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="More Options"
            icon={<HamburgerIcon />}
            variant="outline"
            size="sm"
            borderColor="grey.300"
            _hover={{ borderColor: 'teal.400' }}
          />
          <MenuList>
            <MenuItem as={Link} to="/about">About</MenuItem>
            <MenuItem as={Link} to="/contact">Contact</MenuItem>
            <MenuItem as={Link} to="/pricing">Pricing</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Header;