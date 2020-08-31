import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Container, Content, Button, Icon, InputGroup, Input, List, ListItem, Left, Body } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import ChannelService from './../service/channelService';
import Styles from '../assets/styles';
import Colors from '../assets/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';

class dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spinner: false,
			channels: []
		};
	}

	componentDidMount() {
		this.setState({ spinner: true })
		ChannelService.channelList()
			.then(response => {
				console.log("responseresponseresponseresponseresponse")
				console.log(response)
				if (response.error_code === 1) {
					this.setState({ spinner: false }, () => {
						alert(response.message)
					});
				} else {
					this.setState({
						spinner: false,
						channels: response.data.mode.Multichannel
					});
				}
			}).catch(error => {
				this.setState({ spinner: false }, () => {
					alert(error)
				});
			});
	}


	renderHeader = () => {
		return (
			<>
				<View style={Styles.header}>
					<Text style={{ fontSize: 22, color: Colors.white}}>Select a Channel Type</Text>
				</View>
			</>
		)
	}

	noItemDisplay = () => {
		return (
			<View style={Styles.noItem}>
				<Text style={{ fontSize: 16 }}>No Channel Types to Display</Text>
			</View>
		)
	}

	logout = () => {
		Alert.alert(
			'Logout',
			'Are you sure you want to logout?',
			[
				{ text: 'NO' },
				{
					text: 'YES', onPress: () => {
						AsyncStorage.clear();
						this.props.navigation.navigate('Sync')
					}
				},
			]
		);
	}

	render() {
		return (
			<Container style={{ backgroundColor: Colors.backgroundColor, paddingTop: 20 }}>
				<Icon type='Feather' onPress={this.logout} name='log-out' style={[Styles.textWhite, { alignSelf: 'flex-end', paddingRight: 10, fontSize: 20 }]} />
				<FlatList
					data={this.state.channels}
					numColumns={2}
					renderItem={({ item, index }) => {
						{
							return (
								<List
									style={[Styles.channelList, index == this.state.channels.length - 1 ? { margin: 10, marginRight: 25 } : { margin: 10 }]}
								>
									<ListItem
										noBorder
										onPress={() => {
											console.log(index, "indexindexindexindexindexindex")
											this.props.navigation.navigate('Channels', {
												'channel_id': JSON.stringify(index)
											})
										}}
										style={{ alignItems: 'center', justifyContent: 'center' }}
									>
										<Body style={{ alignItems: 'center' }}>
											<Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
										</Body>
									</ListItem>
								</List>
							)
						}
					}}
					ListHeaderComponent={this.renderHeader}
					keyExtractor={item => String(item._id)}
					onEndReachedThreshold={0.5}
					ListEmptyComponent={this.noItemDisplay}

				/>
				<Spinner
					visible={this.state.spinner}
				/>
			</Container>
		);
	}
}

export default dashboard;
