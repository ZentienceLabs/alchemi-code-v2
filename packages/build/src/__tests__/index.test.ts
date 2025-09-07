// npx vitest run src/__tests__/index.test.ts

import { generatePackageJson } from "../index.js"

describe("generatePackageJson", () => {
	it("should be a test", () => {
		const generatedPackageJson = generatePackageJson({
			packageJson: {
				name: "alchemi-code",
				displayName: "%extension.displayName%",
				description: "%extension.description%",
				publisher: "AlchemiStudio",
				version: "3.17.2",
				icon: "assets/icons/alchemi-code-logo.png",
				contributes: {
					viewsContainers: {
						activitybar: [
							{
								id: "alchemi-code-ActivityBar",
								title: "%views.activitybar.title%",
								icon: "assets/icons/alchemi-code-logo.svg",
							},
						],
					},
					views: {
						"alchemi-code-ActivityBar": [
							{
								type: "webview",
								id: "alchemi-code.SidebarProvider",
								name: "",
							},
						],
					},
					commands: [
						{
							command: "alchemi-code.plusButtonClicked",
							title: "%command.newTask.title%",
							icon: "$(add)",
						},
						{
							command: "alchemi-code.openInNewTab",
							title: "%command.openInNewTab.title%",
							category: "%configuration.title%",
						},
					],
					menus: {
						"editor/context": [
							{
								submenu: "alchemi-code.contextMenu",
								group: "navigation",
							},
						],
						"alchemi-code.contextMenu": [
							{
								command: "alchemi-code.addToContext",
								group: "1_actions@1",
							},
						],
						"editor/title": [
							{
								command: "alchemi-code.plusButtonClicked",
								group: "navigation@1",
								when: "activeWebviewPanelId == alchemi-code.TabPanelProvider",
							},
							{
								command: "alchemi-code.settingsButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == alchemi-code.TabPanelProvider",
							},
							{
								command: "alchemi-code.accountButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == alchemi-code.TabPanelProvider",
							},
						],
					},
					submenus: [
						{
							id: "alchemi-code.contextMenu",
							label: "%views.contextMenu.label%",
						},
						{
							id: "alchemi-code.terminalMenu",
							label: "%views.terminalMenu.label%",
						},
					],
					configuration: {
						title: "%configuration.title%",
						properties: {
							"alchemi-code.allowedCommands": {
								type: "array",
								items: {
									type: "string",
								},
								default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
								description: "%commands.allowedCommands.description%",
							},
							"alchemi-code.customStoragePath": {
								type: "string",
								default: "",
								description: "%settings.customStoragePath.description%",
							},
						},
					},
				},
				scripts: {
					lint: "eslint **/*.ts",
				},
			},
			overrideJson: {
				name: "roo-code-nightly",
				displayName: "Alchemi Code Nightly",
				publisher: "AlchemiStudio",
				version: "0.0.1",
				icon: "assets/icons/icon-nightly.png",
				scripts: {},
			},
			substitution: ["alchemi-code", "roo-code-nightly"],
		})

		expect(generatedPackageJson).toStrictEqual({
			name: "roo-code-nightly",
			displayName: "Alchemi Code Nightly",
			description: "%extension.description%",
			publisher: "AlchemiStudio",
			version: "0.0.1",
			icon: "assets/icons/icon-nightly.png",
			contributes: {
				viewsContainers: {
					activitybar: [
						{
							id: "roo-code-nightly-ActivityBar",
							title: "%views.activitybar.title%",
							icon: "assets/icons/alchemi-code-logo.svg",
						},
					],
				},
				views: {
					"roo-code-nightly-ActivityBar": [
						{
							type: "webview",
							id: "roo-code-nightly.SidebarProvider",
							name: "",
						},
					],
				},
				commands: [
					{
						command: "roo-code-nightly.plusButtonClicked",
						title: "%command.newTask.title%",
						icon: "$(add)",
					},
					{
						command: "roo-code-nightly.openInNewTab",
						title: "%command.openInNewTab.title%",
						category: "%configuration.title%",
					},
				],
				menus: {
					"editor/context": [
						{
							submenu: "roo-code-nightly.contextMenu",
							group: "navigation",
						},
					],
					"roo-code-nightly.contextMenu": [
						{
							command: "roo-code-nightly.addToContext",
							group: "1_actions@1",
						},
					],
					"editor/title": [
						{
							command: "roo-code-nightly.plusButtonClicked",
							group: "navigation@1",
							when: "activeWebviewPanelId == roo-code-nightly.TabPanelProvider",
						},
						{
							command: "roo-code-nightly.settingsButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == roo-code-nightly.TabPanelProvider",
						},
						{
							command: "roo-code-nightly.accountButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == roo-code-nightly.TabPanelProvider",
						},
					],
				},
				submenus: [
					{
						id: "roo-code-nightly.contextMenu",
						label: "%views.contextMenu.label%",
					},
					{
						id: "roo-code-nightly.terminalMenu",
						label: "%views.terminalMenu.label%",
					},
				],
				configuration: {
					title: "%configuration.title%",
					properties: {
						"roo-code-nightly.allowedCommands": {
							type: "array",
							items: {
								type: "string",
							},
							default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
							description: "%commands.allowedCommands.description%",
						},
						"roo-code-nightly.customStoragePath": {
							type: "string",
							default: "",
							description: "%settings.customStoragePath.description%",
						},
					},
				},
			},
			scripts: {},
		})
	})
})
