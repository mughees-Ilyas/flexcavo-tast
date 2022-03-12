import {
    ALL_TELEMATIC_DATA,
    ALL_TELEMATIC_DATA_FAIL,
    ALL_TELEMATIC_DATA_SUCCESS,
} from '../actions/TelematicData.actions';
import { put, takeLatest, all, call } from 'redux-saga/effects';
// import axios from "axios";
// import {API} from "../../../../enviorment";
import {TelematicData} from "../../../../models/telematicData";

let data: TelematicData[] = [{
    "EquipmentHeader": {
        "OEMName": "CAT",
        "Model": "M315F",
        "SerialNumber": "ABC123456",
        "SnapshotTime": "2021-06-26T10:00:00Z"
    },
    "Location": {
        "Latitude": 52.5200,
        "Longitude": 13.4050,
        "Altitude": 70,
        "AltitudeUnits": "metre"
    },
    "CumulativeIdleHours": {
        "Hour": 1060
    },
    "CumulativeOperatingHours": {
        "Hour": 3469.4,
    },
    "Distance": {
        "OdometerUnits": "kilometre",
        "Odometer": 2702.4
    },
    "EngineStatus": {
        "Running": false
    },
    "FuelUsed": {
        "FuelUnits": "litre",
        "FuelConsumed": 24096
    },
    "FuelRemaining": {
        "Percent": 39
    }
},
    {
        "EquipmentHeader": {
            "OEMName": "CAT2",
            "Model": "M315F",
            "SerialNumber": "ABC123456",
            "SnapshotTime": "2021-06-26T10:00:00Z"
        },
        "Location": {
            "Latitude": 52.5200,
            "Longitude": 13.4050,
            "Altitude": 70,
            "AltitudeUnits": "metre"
        },
        "CumulativeIdleHours": {
            "Hour": 1060
        },
        "CumulativeOperatingHours": {
            "Hour": 3469.4,
        },
        "Distance": {
            "OdometerUnits": "kilometre",
            "Odometer": 2702.4
        },
        "EngineStatus": {
            "Running": false
        },
        "FuelUsed": {
            "FuelUnits": "litre",
            "FuelConsumed": 24096
        },
        "FuelRemaining": {
            "Percent": 5
        }
    },
    {
        "EquipmentHeader": {
            "OEMName": "CAT2",
            "Model": "M315F",
            "SerialNumber": "ABC123456",
            "SnapshotTime": "2021-06-26T10:00:00Z"
        },
        "Location": {
            "Latitude": 52.5200,
            "Longitude": 13.4050,
            "Altitude": 70,
            "AltitudeUnits": "metre"
        },
        "CumulativeIdleHours": {
            "Hour": 1060
        },
        "CumulativeOperatingHours": {
            "Hour": 3469.4,
        },
        "Distance": {
            "OdometerUnits": "kilometre",
            "Odometer": 2702.4
        },
        "EngineStatus": {
            "Running": false
        },
        "FuelUsed": {
            "FuelUnits": "litre",
            "FuelConsumed": 24096
        },
        "FuelRemaining": {
            "Percent": 2
        }
    },
    {
        "EquipmentHeader": {
            "OEMName": "CAT3",
            "Model": "M315F",
            "SerialNumber": "ABC123456",
            "SnapshotTime": "2021-06-26T10:00:00Z"
        },
        "Location": {
            "Latitude": 52.5200,
            "Longitude": 13.4050,
            "Altitude": 70,
            "AltitudeUnits": "metre"
        },
        "CumulativeIdleHours": {
            "Hour": 1060
        },
        "CumulativeOperatingHours": {
            "Hour": 3469.4,
        },
        "Distance": {
            "OdometerUnits": "kilometre",
            "Odometer": 2702.4
        },
        "EngineStatus": {
            "Running": false
        },
        "FuelUsed": {
            "FuelUnits": "litre",
            "FuelConsumed": 24096
        },
        "FuelRemaining": {
            "Percent": 40
        }
    }
]

 async function fetchTelematicData() {
        //const todos = await axios.get(url)
        return {data}
}


function* getAllTelematicData() {
    const { data, ex } = yield call(fetchTelematicData);
    if (data)
        yield put({ type:ALL_TELEMATIC_DATA_SUCCESS, data });
    else
        yield put({ type:ALL_TELEMATIC_DATA_FAIL, ex });
}


function* watchGetAllSpecies() {
    yield takeLatest(ALL_TELEMATIC_DATA, getAllTelematicData)
}

export default function* telematicDataSaga() {
  yield all([
      watchGetAllSpecies(),
  ]);
}
