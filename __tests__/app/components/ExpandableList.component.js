import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon, Left, Right, Body, ListItem, Badge } from 'native-base';
import Styles from '../res/styles';

class ExpandableItemComponent extends Component {
    constructor() {
        super();
        this.state = {
            layoutHeight: 0,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.item.isExpanded) {
            return { layoutHeight: null };
        } else {
            return { layoutHeight: 0 };
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.layoutHeight != prevState.layoutHeight) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <View>
                {
                    <>
                        {/* <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={this.props.onClickFunction}
                            style={{ flex: 1 }}
                        > */}
                        {/* <View>
                                <Text style={styles.headerText}>Program:  <Text style={{ fontWeight: 'normal' }}>{this.props.item.program_name}</Text></Text>
                                <Text style={styles.headerText}>Player:      <Text style={{ fontWeight: 'normal' }}>{this.props.item.registrant.data.full_name}</Text></Text>
                            </View>
                            {
                                this.props.item.isExpanded ?
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Icon style={{ alignSelf: 'center' }} name='arrow-dropdown' />
                                    </View>
                                    :
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Icon style={{ alignSelf: 'center' }} name='arrow-dropright' />
                                    </View>
                            } */}

                        <ListItem onPress={this.props.onClickFunction}>
                            <Left>
                                <View style={Styles.paymentAvatarUnselected}>
                                    {
                                        this.props.item.registrant.data.profile_image_path === null ?
                                            <Text style={{ fontSize: 12 }}>
                                                {this.props.item.registrant.data.first_name.charAt(0)} {this.props.item.registrant.data.last_name.charAt(0)}
                                            </Text>
                                            :
                                            <Image style={{ width: 60, height: 60 }} source={{ uri: this.props.item.registrant.data.profile_image_path }} />

                                    }
                                </View>
                                <Body>
                                    <Text style={Styles.programName}>{this.props.item.registrant.data.full_name}</Text>
                                    <Text style={{ fontWeight: 'normal' }}>{this.props.item.program_name}</Text>
                                </Body>
                            </Left>
                            {
                                this.props.item.isExpanded ?
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        {/* <Icon style={{ alignSelf: 'center' }} name='arrow-dropup' /> */}
                                        <Icon style={{ fontSize: 20 }} type='AntDesign' name='caretup' />
                                    </View>
                                    :
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        {/* <Icon style={{ alignSelf: 'center' }} name='arrow-dropdown' /> */}
                                        <Icon style={{ fontSize: 20 }} type='AntDesign' name='caretdown' />
                                    </View>
                            }
                        </ListItem>
                        {/* </TouchableOpacity> */}
                        <View
                            style={{
                                height: this.state.layoutHeight,
                                overflow: 'hidden',
                            }}>
                            {
                                this.props.item.document_receipts.data.map((item, key) => (
                                    <ListItem key={key}>
                                        <TouchableOpacity
                                            style={styles.header}
                                            onPress={() => this.props.navigation.push('SignedDocumentView',
                                                {
                                                    'document_id': item.id,
                                                    'file_path': item.document.data.file_path,
                                                    'file_name': item.document.data.title,
                                                    'file_description': item.document.data.description,
                                                    'html_content': item.document.data.content,
                                                    'signatory_name': item.signatory_name,
                                                    'signature_date': item.signature_date,
                                                    'program_name' : this.props.item.program_name
                                                }
                                            )}>
                                            <View>
                                                <Text>{item.document.data.title}</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                                <Badge style={Styles.view}>
                                                    <Text style={Styles.greyText}>View</Text>
                                                </Badge>
                                            </View>
                                        </TouchableOpacity>

                                    </ListItem>

                                ))
                            }
                        </View>
                    </>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        // backgroundColor: '#F5FCFF',
    },
    topHeading: {
        paddingLeft: 10,
        fontSize: 20,
    },
    header: {
        // backgroundColor: '#F5FCFF',
        // padding: 16,
        flex: 1,
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        height: 0.5,
        // backgroundColor: '#808080',
        width: '95%',
        marginLeft: 16,
        marginRight: 16,
    },
    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
    },
});

export default ExpandableItemComponent;