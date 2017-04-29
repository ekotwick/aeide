import {
	CREATE_CAMPUS,
	UPDATE_CAMPUS,
	DELETE_CAMPUS,
	SET_CAMPUSES
} from '../constants';

const hardCodedCampuses = [
	{
		name: 'Marshall',
		image: 'http://www.hlgjyl888.com/data/wallpapers/215/WDF_2520383.png'
	},
	{
		name: 'Tenor',
		image: 'https://www.diplomaframe.com/Portals/0/images/Content/Product%20Info/Matting%20Options/Navy%20Linen.png'
	},
	{
		name: 'Sandrew',
		image: 'https://www.diplomaframe.com/Portals/0/images/Content/Product%20Info/Matting%20Options/Navy.png'
	},
	{
		name: 'Eagerton',
		image: 'https://www.diplomaframe.com/Portals/0/images/Content/Product%20Info/Matting%20Options/Maroon%20Linen.png'
	},
	{
		name: 'Smerl',
		image: 'https://s-media-cache-ak0.pinimg.com/736x/20/2a/b3/202ab385094b34a21f58749840b022a2.jpg'
	}
];

const initialState = {
	selectedCampus: {},
	listedCampuses: hardCodedCampuses
};

export default function (state=initialState, action) {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case CREATE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses = newState.listedCampuses.concat(action.campus);
			break;

		case UPDATE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		case DELETE_CAMPUS:
			newState.selectedCampus // =;
			newState.listedCampuses // =;
			break;

		case SET_CAMPUSES:
			newState.selectedCampus // =;
			newState.listedCampuses = newState.listedCampuses.concat(action.campuses);
			break;

		default:
			return newState;

	}

	return newState;
}
