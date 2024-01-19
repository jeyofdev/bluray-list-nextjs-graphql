'use client';

import Logo from '@components/ui/Logo';
import { pages } from '@datas/index';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
} from '@mui/material';
import Link from 'next/link';
import { KeyboardEvent, MouseEvent, useState } from 'react';
import { PageType } from '../../types';

const Header = () => {
	const [showSwipeableDrawer, setSwipeableDrawer] = useState<boolean>(false);

	const toggleDrawer =
		(open: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setSwipeableDrawer(open);
		};

	return (
		<AppBar position='static' classes={{ root: 'bg-primary-900' }}>
			<Container maxWidth='lg'>
				<Toolbar disableGutters>
					<Box className='flex w-full justify-between md:hidden'>
						<IconButton size='large' onClick={toggleDrawer(true)}>
							<MenuIcon
								classes={{
									root: 'text-primary-50',
								}}
							/>
						</IconButton>

						<SwipeableDrawer
							anchor='left'
							open={showSwipeableDrawer}
							onClose={toggleDrawer(false)}
							onOpen={toggleDrawer(true)}
							classes={{
								root: 'flex relative md:hidden',
								paper: 'w-full',
							}}
						>
							<IconButton
								size='large'
								classes={{
									root: 'absolute right-4 top-4 hover:bg-danger-50 text-danger-500',
								}}
								onClick={toggleDrawer(false)}
							>
								<CloseIcon />
							</IconButton>

							<Box
								className='flex h-screen w-full items-center justify-center'
								onClick={toggleDrawer(false)}
								onKeyDown={toggleDrawer(false)}
							>
								<List className='flex flex-col gap-10'>
									{pages.map((page: PageType) => (
										<ListItem key={page.id} disablePadding>
											<Link href={page.path} passHref legacyBehavior>
												<ListItemButton className='hover:bg-primary-50'>
													<ListItemText
														primary={page.label}
														classes={{
															primary: 'text-primary-900 text-3xl',
														}}
													/>
													<Divider />
												</ListItemButton>
											</Link>
										</ListItem>
									))}
								</List>
							</Box>
						</SwipeableDrawer>

						<Logo variant='h6' />
						<Box />
					</Box>

					<Box className='hidden md:flex md:gap-14'>
						<Logo variant='h6' />

						<Box className='flex'>
							{pages.map((page: PageType) => (
								<Box
									key={page.id}
									className='border-0 border-r border-solid border-primary-500 px-6 py-2.5 first:border-l'
								>
									<Link href={page.path} passHref legacyBehavior>
										<Button
											key={page.id}
											classes={{
												root: 'p-0 rounded-none text-primary-50 text-base',
											}}
										>
											{page.label}
										</Button>
									</Link>
								</Box>
							))}
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
