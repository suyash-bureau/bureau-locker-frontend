/** @format */

import { Button, Flex, Heading, Stack, Image, Text } from '@chakra-ui/react';
import { googleSignIn } from '../firebase';

export default function AppLanding() {
	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex p={8} flex={1} align={'center'} justify={'center'} direction='column'>
				<Heading>Bureau Locker </Heading>
				<Text textAlign='left' mb='40' color='gray.500' fontWeight='medium' mt='2'>
					Easily rotate, manage and retrieve secrets throughout their lifecycle
				</Text>
				<Stack spacing={4} w={'full'} maxW={'md'}>
					<Stack spacing={6}>
						<Button variant='solid' colorScheme='messenger' py='6' onClick={googleSignIn}>
							<Image src='./google.png' h='4' w='4' mr='4' /> Sign in via Google
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Image
					alt={'Login Image'}
					objectFit={'cover'}
					src={
						'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
					}
				/>
			</Flex>
		</Stack>
	);
}
