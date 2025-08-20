"use client"

import React from 'react'
import {Button} from "@heroui/button";
import {useThemeStore, useUserStore} from '@/stores';
import {LanguagesIcon, MoonIcon, SunIcon} from 'lucide-react';
import DropdownButton from './DropdownButton';
import {Divider, DropdownItem, Image} from "@heroui/react";
import IconButton from "./IconButton";
import {Dropdown, DropdownMenu, DropdownTrigger} from "@heroui/dropdown";

const Header = () => {
	const { theme, toggleTheme } = useThemeStore()
	const { logout }  = useUserStore()

	return (
		<div className='sticky top-0 left-0 h-32 bg-semidark'>
			<div className="container mx-auto h-full flex flex-col py-2 px-4">
				<div className="flex-1 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src='/main/logo.svg' alt='App Logo' />

						<div className='text-lg font-medium'>
							OziPad.io
						</div>
					</div>

					<div className="flex items-center gap-3">
						<Button isIconOnly variant='light'>
							<LanguagesIcon />
						</Button>

						<Button onPress={toggleTheme} isIconOnly variant='light'>
							{theme === 'dark' ? <MoonIcon /> : <SunIcon />}
						</Button>

						<Dropdown>
							<DropdownTrigger>
								<Button isIconOnly variant='light'>
									<Image src='/main/user.svg' alt='User' />
								</Button>
							</DropdownTrigger>

							<DropdownMenu>
								<DropdownItem onPress={logout} key='logout' color='danger'>Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown>

					</div>
				</div>

				<div className='flex-1 flex items-center gap-3'>
					<Dropdown>
						<DropdownTrigger>
							<DropdownButton>File</DropdownButton>
						</DropdownTrigger>

						<DropdownMenu>
							<DropdownItem key='test'>Test</DropdownItem>
						</DropdownMenu>
					</Dropdown>


					<Dropdown>
						<DropdownTrigger>
							<DropdownButton>Edit</DropdownButton>
						</DropdownTrigger>

						<DropdownMenu>
							<DropdownItem key='test'>Test</DropdownItem>
						</DropdownMenu>
					</Dropdown>


					<Dropdown>
						<DropdownTrigger>
							<DropdownButton>View</DropdownButton>
						</DropdownTrigger>

						<DropdownMenu>
							<DropdownItem key='test'>Test</DropdownItem>
						</DropdownMenu>
					</Dropdown>

					<Dropdown>
						<DropdownTrigger>
							<DropdownButton>Tools</DropdownButton>
						</DropdownTrigger>

						<DropdownMenu>
							<DropdownItem key='test'>Test</DropdownItem>
						</DropdownMenu>
					</Dropdown>

					<Dropdown>
						<DropdownTrigger>
							<DropdownButton>Plugins</DropdownButton>
						</DropdownTrigger>

						<DropdownMenu>
							<DropdownItem key='test'>Test</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>

				<div className="flex-1 flex items-center justify-between">
					<div className="flex items-center gap-3">

						<IconButton name='add'/>

						<IconButton name='paste' />

						<IconButton name='download' />

						<IconButton name='share' />

						<IconButton name='qr-scan' />

						<IconButton name='text-size' />

						<Divider orientation='vertical' className='h-6'/>

						<IconButton name='copy' />

						<IconButton name='paste' />

						<IconButton name='broom' />

						<Divider orientation='vertical' className='h-6' />

						<IconButton name='undo' />

						<IconButton name='redo' />

						<Divider orientation='vertical' className='h-6' />

						<IconButton name='binary-lock' />

						<IconButton name='binary-lock-1' />

						<IconButton name='table-list' />

						<IconButton name='unlock' />

						<div className="flex items-center gap-3">
							<IconButton name='trash-can-unlock' />

							<div>3 days</div>
						</div>
					</div>

					<IconButton name='full-screen' />
				</div>
			</div>
		</div>
	)
}
export default Header
