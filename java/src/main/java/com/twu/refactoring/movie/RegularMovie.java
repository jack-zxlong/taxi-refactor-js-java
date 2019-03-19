package com.twu.refactoring.movie;

import com.twu.refactoring.MovieAbstract;
import com.twu.refactoring.Rental;

public class RegularMovie extends MovieAbstract{

	@Override
	public double getPrice(Rental each) {
		double moviePrice = 2;
		if (each.getDaysRented() > 2) {
			moviePrice += (each.getDaysRented() - 2) * 1.5;			
		}
		return moviePrice;
	}
	
}
