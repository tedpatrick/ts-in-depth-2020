
export const BROKEN_SPOKE_ADDRESS = '3201 S Lamar Blvd, Austin, TX 78704';
export const GRUENE_HALL_ADDRESS = '1281 Gruene Rd, New Braunfels, TX 78130';

export const arraysMatch = (
	arr1: any[],
	arr2: any[]
) :boolean => {
	if ( arr1.length !== arr2.length ){
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]){
			return false;
		}
	}
	return true;
};
