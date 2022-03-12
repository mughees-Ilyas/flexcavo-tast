import React, {useEffect, useState} from "react";
import { Heading } from "../../styled/Heading";
import DataTable from "../../components/DataTable";
import styled from "styled-components";
import { rem } from "polished";
import { Button } from "../../styled/Button"
import { colors } from '../../theme/colors';
import { connect } from 'react-redux'
import {get_telematic_data_action} from "../../store/Redux/telematicData/actions/TelematicData.actions";
import {Label} from "../../styled/Label";

const ButtonElement = styled.div`
    flex: 2;
    font-weight: 400;
    text-align: right;
`;

const Page = styled.div`
  margin: 0 auto;
  padding: ${rem(16)};
  flex: 1;
  max-width: ${rem(960)};
`;

const Banner = styled.div`
     display: flex;
    border-bottom: 1px solid ${colors.secondary};
    
`;

function ReviewPage({dispatch, data}) {
    //set state management
    useEffect(() => {
        dispatch(get_telematic_data_action());
    },[dispatch]);

    const rows = [];
    if(data && data.length) {
        for (let i=0; i< data.length ;i++){
            rows.push(
                {
                Name:data[i].EquipmentHeader.OEMName,
                Model:data[i].EquipmentHeader.Model,
                FuelRemaining:data[i].FuelRemaining.Percent,
                Status:data[i].EngineStatus.Running? 'yes' : 'No'
                }
            )

        }
    }

        // change row data on state change.
            return (
            <div>
                <Page>
                    <Heading>Review</Heading>
                    <Banner>
                        <ButtonElement>
                            <Button type="PrimaryHollow">Create new Data</Button>
                        </ButtonElement>
                    </Banner>
                    <DataTable
                        title="review Telematic Data"
                        columns={[
                            { label: 'Name',  prop: 'Name'},
                            { label: 'Model',  prop: 'Model' },
                            { label: 'Engine Status',  prop: 'Status', flex: 2 },
                            { label: 'Fuel Remaining' , prop: 'FuelRemaining', template: (item) => {return <Label type={item.FuelRemaining < 5 ?  "danger":"success"}>{item.FuelRemaining}</Label>}},
                        ]}
                        rows={rows}
                    />
                </Page>
            </div>
        );
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        data: state.telematicReducer.data
    }
};

export default connect(mapStateToProps)(ReviewPage);
