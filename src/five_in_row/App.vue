<template>
	<div>
		<h1>Five in row</h1>


		



		<table>
			<tbody>
				<tr>
					<td>
								<p class=bodytext>Your goal in Five-in-a-row is to get five X's in a row while preventing your 
						opponent from getting five O's in a row. In this JavaScript implementation, the 
						game is played on a 15x15 board. (If you'd like a bigger or smaller board, you 
						can set it to any size from 10x10 through 20x20.) You play X's, and the computer 
						plays O's. First move is yours. Enjoy!</p>


						

						<select v-model="size">
							<option v-for="(num, index) in sizes" :value="num" :key="index">
								{{ num }}
							</option>
						</select>
						<button>Start new game</button>				
					</td>

					<td>

						<d-board></d-board>
						
					</td>
				</tr>
			</tbody>
		</table>


	</div>
</template>




<script>
import {SIZES} from "./defs";
import component_board from "./Board.vue"
export default {
	data: function(){
		return {
			"sizes"		: SIZES,
			"size"		: SIZES[0]
		}
	},

	components: {
		"d-board"	: component_board
	}
}
</script>